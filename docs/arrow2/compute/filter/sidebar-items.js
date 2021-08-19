initSidebarItems({"fn":[["build_filter","Returns a prepared function optimized to filter multiple arrays. Creating this function requires time, but using it is faster than [filter] when the same filter needs to be applied to multiple arrays (e.g. a multi-column `RecordBatch`). WARNING: the nulls of `filter` are ignored and the value on its slot is considered. Therefore, it is considered undefined behavior to pass `filter` with null values."],["filter","Filters an [Array], returning elements matching the filter (i.e. where the values are true). WARNING: the nulls of `filter` are ignored and the value on its slot is considered. Therefore, it is considered undefined behavior to pass `filter` with null values."],["filter_record_batch","Returns a new [RecordBatch] with arrays containing only values matching the filter. WARNING: the nulls of `filter` are ignored and the value on its slot is considered. Therefore, it is considered undefined behavior to pass `filter` with null values."]],"type":[["Filter","Function that can filter arbitrary arrays"]]});