import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Subject from "@/components/log/Entry.vue";

describe("Entry (components/log/Entry.vue)", () => {
  let entry;
  let wrapper;

  beforeEach(() => {
    entry = { title: "entry", body: "body", pinned: false };
    wrapper = shallowMount(Subject, {
      propsData: { entry },
      stubs: ["ff-button", "box"]
    });
  });
  it("renders props when passed", () => {
    expect(wrapper.text()).to.include(entry.title);
  });

  describe("computed", () => {
    it("title", () => {
      expect(wrapper.vm.title).to.eq(entry.title);
    });

    it("body", () => {
      expect(wrapper.vm.body).to.eq(entry.body);
    });
  });
});
