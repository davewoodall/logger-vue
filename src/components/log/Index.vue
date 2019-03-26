<template>
  <section>
    <template v-if="activeSearch">
      <section class="search">
        <section class="search-logs">
          <p class="p3" @click="cancelSearch">cancel search</p>
        </section>
        <box>
          <input
            type="text"
            @change="query"
            placeholder="Search by Title"
            v-model.lazy.trim="searchTitle"
          />
        </box>
        <template v-if="searchResults.length > 0">
          <section class="search-logs">
            <h2 class="h2">found {{ searchResults.length }} results</h2>
          </section>
          <template v-for="entry in searchResults">
            <log-entry
              :entry="entry"
              :class="{ pinned: entry.pinned, deleted: entry.archived }"
              :key="entry.id"
            />
          </template>
        </template>
        <template v-else>
          <section class="search-logs">
            <template v-if="searchTitle !== ''">
              <p class="p">Sorry, no logs contain: '{{ this.searchTitle }}'</p>
            </template>
          </section>
        </template>
      </section>
    </template>
    <template v-else>
      <section class="search-logs">
        <p class="p3" @click="hideIndex">search logs</p>
      </section>

      <template v-if="indexVisible">
        <template v-for="entry in pinned">
          <log-entry
            :entry="entry"
            :class="{ pinned: entry.pinned }"
            :key="entry.id"
          />
        </template>
        <template v-for="entry in rest">
          <log-entry
            :entry="entry"
            :class="{ pinned: entry.pinned }"
            :key="entry.id"
          />
        </template>
      </template>
    </template>
  </section>
</template>

<script>
import LogEntry from "@/components/log/Entry";
import Log from "@/components/log/model";
export default {
  components: {
    LogEntry
  },
  data() {
    return {
      log: {},
      activeSearch: false,
      searchTitle: "",
      searchResults: [],
      indexVisible: true
    };
  },
  methods: {
    query() {
      this.searchResults = Log.search(this, this.searchTitle);
      return this.searchResults;
    },
    hideIndex() {
      this.indexVisible = !this.indexVisible;
      this.activeSearch = !this.activeSearch;
    },
    cancelSearch() {
      this.hideIndex();
      this.searchTitle = "";
      this.searchResults = [];
    }
  },
  computed: {
    index() {
      return Log.all(this);
    },
    pinned() {
      return Log.partition(this)[0];
    },
    rest() {
      return Log.partition(this)[1];
    }
  },
  created() {
    this.log = Log;
  }
};
</script>
<style scoped lang="scss">
.search-logs {
  padding: $size4;
  text-align: center;
  .p3 {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
