<template>
  <box :class="entry.pinned ? 'pin' : 'entry'">
    <template v-if="entry.archived">
      <div class="deleted-msg p3">
        deleted
      </div>
    </template>
    <h2 class="h1 title">
      {{ title }}
    </h2>
    <section class="meta">
      <p class="p2 id">#{{ id }}</p>
      <p class="p2 date">{{ created }}</p>
    </section>
    <h3 class="p body">{{ body }}</h3>
    <section class="actions">
      <template v-if="entry.archived == false">
        <ff-button @click="destroy" class="warn small">Delete</ff-button>
        <template v-if="pinned">
          <ff-button @click="pin" class="info small">Unpin</ff-button>
        </template>
        <template v-else>
          <ff-button @click="pin" class="success small">Pin</ff-button>
        </template>
      </template>
    </section>
  </box>
</template>
<script>
import Log from "./model";
import moment from "moment";
export default {
  props: {
    entry: {}
  },
  methods: {
    destroy() {
      const message = confirm("Are you sure?");
      if (message === true) {
        Log.destroy(this, this.id);
      }
    },
    pin() {
      Log.pin(this, this.id);
    }
  },
  computed: {
    title() {
      return this.entry.title;
    },
    id() {
      return this.entry.id;
    },
    created() {
      return moment(this.entry.createdAt).format("h:mm:ss A, MM-DD-YY");
    },
    body() {
      return this.entry.body;
    },
    pinned() {
      return this.entry.pinned;
    }
  }
};
</script>

<style scoped lang="scss">
.actions {
  padding-top: $size2;
  text-align: right;
}

.title {
  padding: $size4 $size2;
}
.date {
  text-align: right;
}

.box.deleted.entry {
  border: 3px solid $red;
}

.light-theme {
  .actions {
    margin-top: $size8;
  }
  .box.pin {
    border-right: 10px dotted $gray;
    border-left: 10px dotted $gray;
    box-shadow: none;
  }
  @media (min-width: $break2) {
    .box.pin {
      border-right: 20px dotted $gray;
      border-left: 20px dotted $gray;
    }
    .box.pin:nth-child(even) {
      transform: rotate(-1deg);
    }
    .box.pin:nth-child(odd) {
      transform: rotate(1deg);
    }
  }
}

.meta {
  display: flex;
  justify-content: space-between;
  padding: $size4 0;
}

.dark-theme {
  .pin {
    border: 1px dashed $warn;
  }
}
</style>
