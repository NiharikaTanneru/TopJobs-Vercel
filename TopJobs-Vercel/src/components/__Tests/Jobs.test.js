import { render, cleanup, waitForElement } from "react-testing-library";
import "jest-dom/extend-expect";
import axiosMock from '../__mocks__/axios';
import Jobs from "../../Pages/Jobs";

afterEach(cleanup);
describe("Jobs Component",()=>{
    it("fetches and displays data",async ()=>{
      axiosMock.get.mockResolvedValueOnce({data: {}})
    })
});