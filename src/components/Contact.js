const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-2"> Contact us </h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className=" border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2"
        />
        <button className="border-black p-2 m-2 bg-gray-800 text-white rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
