# THE POINT

I am tired of manipulating a spreadsheet to input data after I send in a job application. I almost always get caught with an issue of some nonsense, even though it should be simple. With the number of applications one is expected to send it will be difficult to keep track of what roles and all I have been looking at, and I want to improve the process to help reduce friction.

This is meant to be quick, simple, and as vanilla as I can make it. I have nothing against third-party integrations, but I like to be able to have as few dependencies as I can too. It is about balancing values and speed, largely, I think.

I also am building this thinking at scale and adding a _lot_ more to the app, but that was more for my planning purposes than actually intent for implementation. Really, I want to get this to a point where I am getting the most value from investing time into it over using a spreadsheet.

## THE PLAN

- I want the application to display the previous application I have sent in, or ask me new questions to input new applications submitted. This depends on the option selected.
- The data are manipulated as an object when I am working with them and exported as a CSV file.

### Future Ideas

- Be able to manipulate the entries from the terminal directly (This is why I have an ID in there)
  - Did I get a **Response**?
  - Did I receive an **Offer**?
  - Did you get an **Interview**?
- Data metrics like
  - Total Apps Sent
  - Number of responses received
  - Number of Interviews
  - Potentially add a front-end, but I have been enjoying the solo back-end app coding too

