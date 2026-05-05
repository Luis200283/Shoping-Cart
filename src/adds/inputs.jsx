export default function Inputs() {
  return (
    <form class="bg-gray-800 p-3 flex flex-col gap-2 text-white mt-10 rounded-lg border border-gray-200 w-1/2 mx-auto">
      <label class="block"></label>
      <span class="">Correo electronico</span>
      <input
        type="email"
        class="peer p-1 border-2 rounded-md outline-none invalid:border-pink-600 invalid:text-pink-600"
      />
      <p class="invisible peer-invalid:visible  peer-invalid:text-pink-600">
        Please provide a valid email address.
      </p>
    </form>
  );
}
