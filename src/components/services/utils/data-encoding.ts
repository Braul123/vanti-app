import { Buffer } from 'buffer';

/**
 * @description Codifica un dato a base64
 * @param value -> recibe un dato string - json
 */

export async function EncodeData(value: string) {
    return new Promise((resolve, reject) => {
        try {
            const encode: any = Buffer.from(value).toString("base64");
            resolve(encode);
        } catch(err) {
            reject(err);
        }
    })
}

/**
 * @description Decofica una cadena de base64
 * @param encode -> dato
 */
export async function DecodeData(encode: string) {
    const decode = await Buffer.from(encode, 'base64').toString("utf8");
    return decode;
}