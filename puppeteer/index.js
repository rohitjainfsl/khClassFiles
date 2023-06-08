import puppeteer from "puppeteer";
// import fs from "fs";
import fs from "fs/promises";

async function init() {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();
  await page.goto("https://en.wikipedia.org/wiki/Headless_browser#Usage");

  // await page.screenshot({path: 'screenshot.png', type: 'png', fullPage: true})

  // await page.pdf({path: 'doc.pdf', format: "A4"})

  // const html = await page.content()
  // console.log(html)

  //   const title = await page.evaluate(() => document.title);
  //   console.log(title);

  //   const text = await page.evaluate(() => document.body.innerHTML);
  //   console.log(text);

  //   const courses = await page.evaluate(
  //     () => document.querySelector("#cscourses").innerHTML
  //   );
  //   console.log(courses)

    const links = await page.evaluate(() =>
      Array.from(document.querySelectorAll(".reflist .references li"), (elements) => {
        return {
          title: elements.querySelector(".reference-text cite a").innerText,
          link: elements.querySelector(".reference-text cite a").href
        }
      })
    );
    console.log(links);

  //   const courses = await page.evaluate(() =>
  //     Array.from(document.querySelectorAll(".cscourse-grid .card"), (e) => {
  //       return {
  //         title: e.querySelector(".card-body h3").innerText,
  //         level: e.querySelector(".card-body .level").innerText,
  //         url: e.querySelector(".card-footer a").innerText,
  //         courseLink: e.querySelector(".card-footer a").href,
  //       };
  //     })
  //   );

  //   const courses = await page.$$eval(".cscourse-grid .card", (elements) =>
  //     elements.map((e) => ({
  //       title: e.querySelector(".card-body h3").innerText,
  //       level: e.querySelector(".card-body .level").innerText,
  //       url: e.querySelector(".card-footer a").innerText,
  //       courseLink: e.querySelector(".card-footer a").href,
  //     }))
  //   );

  //   console.log(courses);

  //   fs.writeFile("courses.json", JSON.stringify(courses), (err) => {
  //     if(err) throw err;
  //     console.log("Scraping Done, Go have fun!!!")
  //   })

  //SAVING IMAGES TO DISK
  const images = await page.$$eval("img", (elements) =>
    elements.map((im) => im.src)
  );

    console.log(images)

  for (const image of images) {
    const imagePage = await page.goto(image);
    await fs.writeFile(image.split("/").pop(), await imagePage.buffer());
  }

  await browser.close();
}

init();