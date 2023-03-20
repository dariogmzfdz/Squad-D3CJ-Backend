import propertiesReader from 'properties-reader';

const properties = propertiesReader('./application.properties')

export class ServiceDiscoveryService {
    getServiceUrl(serviceName: string) {
        const url =
            'http://10.30.62.75:' + properties.get(serviceName + 'Service.port')
        return url
    }
}