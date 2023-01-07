import { resizeImage, resized_file_path } from "../utils/resizeImage";
import fs from "fs";

//RESIZE UTIL CHECKER
describe("resizeImage", (): void => {
  it("should resize the image to the specified dimensions", async () => {
    await expectAsync(resizeImage("input", "300", "550")).toBeResolved();
  });

  it("should return an error if the parameters are missing", async () => {
    await expectAsync(resizeImage("nonexistent", "500", "350")).toBeRejected();
  });

  // Delete the resized image after the test
  afterEach(async () => {
    const img_path = resized_file_path("input", "500", "350");
    if (fs.existsSync(img_path)) {
      fs.unlinkSync(img_path);
    }
  });
});
