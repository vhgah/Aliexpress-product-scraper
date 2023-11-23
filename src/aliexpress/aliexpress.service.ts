import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class AliexpressService {
  async scrapeProductDetails(productId: string): Promise<any> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`https://www.aliexpress.com/item/${productId}.html`, {
      timeout: 0,
    });

    const aliExpressData = await page.evaluate(() => {
      // Define the runParams variable here
      const runParams: any = (window as any).runParams;

      return runParams;
    });

    const data = aliExpressData.data;

    console.log(data);

    await browser.close();

    return {
      data,
    };
  }
}
