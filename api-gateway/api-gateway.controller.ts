import { ServiceDiscoveryService } from "./serviceDiscovery.service"
import axios from "axios"

const serviceDiscoveryService: ServiceDiscoveryService = new ServiceDiscoveryService()

export const apiGatewayController = {
    redirect: (req: any, res: any) => {
        const reqUrl = req.originalUrl
        const serviceName = reqUrl.slice(reqUrl.lastIndexOf('api/'), reqUrl.lastIndexOf('/') + 1).replace('api/', '').replace('/', '')
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
    }
}