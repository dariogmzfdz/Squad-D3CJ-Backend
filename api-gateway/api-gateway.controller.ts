import { Product, Images } from './types';
import { ServiceDiscoveryService } from "./serviceDiscovery.service"
import axios from "axios"
import * as fs from "fs"
import { v4 as uuid } from "uuid"

const serviceDiscoveryService: ServiceDiscoveryService = new ServiceDiscoveryService()

export const apiGatewayController = {
    redirect: (req: any, res: any) => {
        const reqUrl = req.originalUrl
        const serviceName = reqUrl.split('/')[2]
        /* const servicePetition = reqUrl.slice(reqUrl.lastIndexOf('api/'), reqUrl.length).replace('api/', '').replace(serviceName + '/', '') */
        const serviceUrl = serviceDiscoveryService.getServiceUrl(serviceName)
        const method = req.method

        if (method === 'POST') {
            axios.post(serviceUrl + reqUrl, req.body).then((response: any) => {
                res.json(response.data)
            }).catch((error: any) => {
                console.log(error);
                res.sendStatus(500)
            })
        } else if (method === 'GET') {
            axios.get(serviceUrl + reqUrl).then((response: any) => {
                res.json(response.data)
            }).catch((error: any) => {
                console.log(error);
                res.sendStatus(500)
            })
        }

        console.log(serviceName);
        console.log(reqUrl); 
        console.log(serviceUrl);
        console.log(serviceUrl + reqUrl);
    },
    redirectImages: (req: any, res: any) => {
        // Casteas el body a un objeto de tipo producto
        // Generas UUID para el producto
        // Recorres el array de imágenes
        // Por cada uno de ellos => Creas una carpeta con el UUID del producto y guardas la imagen en esa carpeta
        // Guardas la ruta de la imagen en el array de imágenes del producto
        // Envías el producto con el array de imágenes al servicio de productos
        let data : Product = JSON.parse(req.body.data) as Product
        const productId = uuid()
        data = {...data}
        data.images = []
        data.productId = productId
        data.cars[0].productId = productId
        const images = req.files
        fs.mkdirSync(`/images/${data.productId}`)
        images.forEach((image: any) => {
            let newPath = `/images/${data.productId}/${image.originalname}`
            fs.copyFile(image.path, newPath, (err: any) => {
                if (err) {
                    console.log(err)
                }
            })
            let tbiImage : Images = {
                imageId: uuid(),
                productId: data.productId,
                path: newPath
            }
            console.log(tbiImage);
            console.log(data);

            data.images.push(tbiImage)
        })
        const reqUrl = req.originalUrl.replace('images', 'api')
        const serviceName = reqUrl.split('/')[2]
        const serviceUrl = serviceDiscoveryService.getServiceUrl(serviceName)

        axios.post(serviceUrl + reqUrl, data).then((response: any) => {
            res.json(response.data)
            console.log(response.data);
        }).catch((error: any) => {
            console.log(error);
            res.sendStatus(500)
        })

        console.log(serviceName);
        console.log(reqUrl);
        console.log(serviceUrl)
        console.log(serviceUrl + reqUrl)
    }
}