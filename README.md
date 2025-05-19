# THE POINT

I am tired of manipulating a spreadsheet to input data after I send in a job application. I almost always get caught with an issue of some nonsense, even though it should be simple. With the number of applications one is expected to send it will be difficult to keep track of what roles and all I have been looking at, and I want to fix that.

This is meant to be quick, simple, and as vanilla as I can make it. I have nothing against third-party integrations, but I like to be able to have as few dependencies as I can too. It is about balancing values and speed, largely, I think.

## THE PLAN

**WHEN** the script is run **THEN** I want to ask for the following information:

- What is the **Company** ?
- What is the **Role**
- What is the **Salary**
- Where can I find the **Job Posting**
- What **Date** did I apply?
- Is there someone I contacted?
  - IF **Yes**
    - What is their **[Name]**
    - What is their **[Email]**
    - What is their **[Phone Number]**
  - IF **No** do nothing

**WHEN** all the information has been received, **THEN** I want to open the csv I have for this information and append it.

### Future Ideas

- Be able to manipulate the entries from the terminal directly (This is why I have an ID in there)
  - Did I get a **Response**?
  - Did I receive an **Offer**?
  - Did you get an **Interview**?
- Display applications in a table in the terminal
- Data metrics like
  - Total Apps Sent
  - Number of responses received
  - Number of Interviews
  - Potentially add a front-end, but I have been enjoying the solo back-end app coding too

