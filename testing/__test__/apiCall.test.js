import { fetchData } from "../apiCall";
import axios from "axios";

jest.mock('axios')

// test('testing axios', async () => {
//     const result = await fetchData()
//     console.log(result)
//     expect(1).toBe(1)
// })


test('testing a false axios like env', async () => {
    const user = {name: 'Om', gender: 'male', email: 'om@gmail.com'}
    axios.get.mockResolvedValue({data: user})
    const result = await fetchData()
    console.log(result)
    expect(result).toBe(user)
})



//UNIT TESTING

//End to End Testing
// 	End-to-end testing (E2E testing) is a software testing approach that involves testing an entire application or system in a real-world scenario.
// 	It focuses on ensuring that all components and systems work together correctly and that the application behaves as expected from the user's perspective.
// 	Key characteristics:
// 	Scope: It tests the entire application or system, including the user interface, APIs, databases, external libraries etc.
// 	Real-world scenarios: It simulates user interactions and workflows, replicating how a user would interact with the application in a production-like environment.




describe("My first test suite", () => {
    beforeAll(async () => {
      await page.goto("https://www.google.co.in/");
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });
  
    test("Title of the page", async () => {
      const title = await page.title();
      expect(title).toBe("Google");
    });
  
    test("URL of the page", async () => {
      const url = await page.url();
      expect(url).toBe("https://www.google.co.in/"); 
    });
  });