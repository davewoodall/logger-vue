import { expect } from "chai";
import Log from "@/components/log/model";

describe("Log Model (components/log/model.js)", () => {
  let subject;
  let placeholder;
  let mockEnv;
  let title;
  let body;
  let data;
  let search;
  let archived;
  let pinned;

  beforeEach(() => {
    title = "This is a great title";
    body = "Body moving";
    data = {
      id: "123",
      title: title,
      body: body,
      pinned: false,
      archived: false,
      createdAt: ""
    };
    search = { title: "fake farm", body: body, pinned: false, archived: true };
    archived = {
      title: "fake farm2",
      body: body,
      pinned: false,
      archived: true
    };
    pinned = { title: title, body: body, pinned: true, archived: false };
    placeholder = [data, archived, archived, pinned, pinned, search];
    mockEnv = {
      $store: {
        dispatch() {},
        getters: {
          ["Log/all"]: placeholder
        }
      }
    };
    subject = new Log(mockEnv, data);
  });
  describe("Class Methods", () => {
    describe("#destroy(env,'id')", () => {
      it("archives", () => {
        let log = Log.find(mockEnv, "123");
        Log.destroy(mockEnv, "123");
        expect(log.archived).to.eq(true);
      });
    });
    describe("#find(env,'id')", () => {
      it("by id", () => {
        expect(Log.find(mockEnv, "123")).to.eq(data);
      });
    });
    describe("#search(env,'id')", () => {
      it("by title", () => {
        expect(Log.search(mockEnv, "fake")).to.deep.eq([
          archived,
          archived,
          search
        ]);
      });
    });
    describe("#pin(env,'id')", () => {
      it("returns a boolean", () => {
        expect(Log.pin(mockEnv, "123")).to.eq(true);
      });
      it("toggles", () => {
        Log.pin(mockEnv, "123");
        expect(Log.pin(mockEnv, "123")).to.eq(false);
      });
    });
    describe("#all(env)", () => {
      it("returns all active entries", () => {
        expect(Log.all(mockEnv)).to.deep.eq([data, pinned, pinned]);
      });
    });
    describe("#partition(env)", () => {
      it("divides entries into pin and not pinned", function() {
        let entry1 = {
          title: "entry1",
          body: body,
          pinned: false,
          archived: false
        };
        let entry2 = {
          title: "entry2",
          body: body,
          pinned: false,
          archived: false
        };
        let entry3 = {
          title: "entry3",
          body: body,
          pinned: false,
          archived: true
        };
        let entry4 = {
          title: "entry4",
          body: body,
          pinned: true,
          archived: true
        };
        let entry5 = {
          title: "entry5",
          body: body,
          pinned: true,
          archived: false
        };
        let logs = [entry1, entry2, entry3, entry4, entry5];
        mockEnv = {
          $store: {
            dispatch() {},
            getters: {
              ["Log/all"]: logs
            }
          }
        };
        let expected = [[entry5], [entry1, entry2]];
        expect(Log.partition(mockEnv)).to.deep.eq(expected);
      });
    });
    describe("#count(env,['log', 'pinned', 'deleted'])", () => {
      it("log", () => {
        expect(Log.count(mockEnv, "log")).to.eq(1);
      });
      it("pinned", () => {
        expect(Log.count(mockEnv, "pinned")).to.eq(2);
      });
      it("deleted", () => {
        expect(Log.count(mockEnv, "deleted")).to.eq(3);
      });
    });
  });
  describe("Instance Methods", () => {
    describe("#title", () => {
      it("is accessible", () => {
        expect(subject.title).to.eq(title);
      });
      it("is required", () => {
        expect(subject.valid()).to.eq(true);
      });
      it("is not valid as null, undefined, or empty string", () => {
        subject.title = "";
        expect(subject.valid()).to.eq(false);

        subject.title = null;
        expect(subject.valid()).to.eq(false);

        subject.title = undefined;
        expect(subject.valid()).to.eq(false);
      });
    });
    describe("#body", () => {
      it("is accessible", () => {
        expect(subject.body).to.eq(body);
      });
    });
    describe("#save", () => {
      it("does not save if validation errors", () => {
        subject.title = "";
        expect(subject.save()).to.eq(false);
      });

      it("returns self if no errors", () => {
        expect(subject.save()).to.eq(subject);
      });
    });
    describe("#valid", () => {
      it("check if subject can be saved", () => {
        expect(subject.valid()).to.eq(true);
      });
    });
    describe("#data", () => {
      it("returns self if no errors", () => {
        const keys = Object.keys(subject.data());
        const e = Object.keys(data);
        expect(keys).to.deep.eq(e);
      });
    });
  });
  describe("Validations", () => {
    it("Missing title is invalid log", () => {
      subject.title = "";
      expect(subject.errors()["title"]).to.eq("please add title");
    });
    it("Valid logs do not have errors", () => {
      expect(subject.errors()).to.eq("");
    });
  });
});
