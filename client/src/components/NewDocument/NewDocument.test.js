import { mount } from "@vue/test-utils";
import NewDocument from "./NewDocument";

const createWrapper = () => {
  return mount(NewDocument);
};

it("should mount NewDocument component", function() {
  const wrapper = createWrapper();

  expect(wrapper.contains("div")).toBe(true);
});
