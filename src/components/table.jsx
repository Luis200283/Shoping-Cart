export default function Table() {
    return  (
              <div class="table w-full md:w-180 text-white p-5 mx-auto">
        <div class="table-header-group text-white bg-gray-600 font-bold rounded-2xl p-5">
          <div class="table-row">
            <div class="table-cell text-left">Song</div>
            <div class="table-cell text-left">Artist</div>
            <div class="table-cell text-left">Year</div>
          </div>
        </div>
        <div class="table-row-group bg-gray-700">
          <div class="table-row">
            <div class="table-cell">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </div>
            <div class="table-cell">Malcolm Lockyer</div>
            <div class="table-cell">1961</div>
          </div>
          <div class="table-row">
            <div class="table-cell">Witchy Woman</div>
            <div class="table-cell">The Eagles</div>
            <div class="table-cell">1972</div>
          </div>
          <div class="table-row">
            <div class="table-cell">Shining Star</div>
            <div class="table-cell">Earth, Wind, and Fire</div>
            <div class="table-cell">1975</div>
          </div>
        </div>
      </div>
    )
}