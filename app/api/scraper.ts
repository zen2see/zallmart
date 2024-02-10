import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils'
import puppeteer from 'puppeteer-core'

const auth = 'USERNAME:PASSWORD'

export default async function run(req: any, res: { status: (arg0: number) => void }) {
    let browser
    try { 
            browser = await puppeteer.connect({
                browserWSEndpoint: `WSS://${auth}@BRD.SUPERPROXY.IO:9222`
            })
            res.status(200)
    }
    catch (e) {
        res.status(404)
    }
    finally {
        await browser?.disconnect()
    }

}                                                                                                       WW
    