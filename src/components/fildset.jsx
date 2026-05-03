export default function Fieldset() {
  return (
    <fieldset className="mx-auto bg-gray-900 text-white p-4 w-2/3 mt-10 rounded-lg">
      <legend className="bg-sky-700 font-bold p-1 rounded-lg relative ">
        Published status
      </legend>
      <input
        id="draft"
        class="peer/draft mx-1"
        type="radio"
        name="status"
        defaultChecked
      />
      <label for="draft" className="peer-checked/draft:text-sky-500 mr-3">
        Draft
      </label>
      <input id="published" class="peer/published" type="radio" name="status" />
      <label for="published" className="peer-checked/published:text-sky-500">
        Published
      </label>
      <div className="hidden peer-checked/draft:block text-gray-300 mt-2">
        Drafts are only visible to administrators.
      </div>
      <div className="hidden peer-checked/published:block text-gray-300 mt-2">
        Your post will be publicly visible on your site.
      </div>
    </fieldset>
  );
}
