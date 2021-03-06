/**
 * Barista API
 * REST API documentation for the Barista system
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface JobInfoDto { 
    attemptsMade: number;
    data: object;
    delay: number;
    finishedOn: object;
    id: number;
    name: string;
    opts: object;
    processedOn: object;
    progress: number;
    returnvalue: object;
    stacktrace: Array<string>;
    timestamp: number;
}

