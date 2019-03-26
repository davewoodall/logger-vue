import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Subject from "@/components/app/Nav";

describe("Nav (components/app/Nav.vue)", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Subject, {
      stubs: ["ff-button", "router-link", "ff-Counters"]
    });
  });

  describe("Theme Management", () => {
    describe("Mode manages colors", () => {
      it("#mode", () => {
        expect(wrapper.vm.mode).to.eq("dark");
      });
      it("#changeMode", () => {
        expect(wrapper.vm.changeMode()).to.eq("light-theme");
        expect(wrapper.vm.mode).to.eq("light");
        expect(wrapper.vm.changeMode()).to.eq("dark-theme");
      });
    });
    describe("Text manages typography", () => {
      it("#text", () => {
        expect(wrapper.vm.text).to.eq("sans");
      });
      it("#changeText", () => {
        expect(wrapper.vm.changeText()).to.eq("serif");
        expect(wrapper.vm.changeText()).to.eq("sans");
      });
    });
    describe("Fires a 'style' event", () => {
      it("#renderStyle", () => {
        let styles = ["dark-theme", "sans"];
        expect(wrapper.vm.renderStyle()).to.deep.eq(styles);
      });
    });
  });
});
