import Image from "next/image";
import { downloadImage } from "@/utils";
import { useState } from "react";
const Card = ({ _id, name, prompt, photoUrl }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const deleteImage = async (photo) => {
    const url = new URL(photo);
    const photoId = url.pathname.split("/").pop();
    console.log(photoId);
    const res = await fetch("/api/post", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ photoId, photoUrl }),
    });
    const data = await res.json();
    if (data.success) {
      window.location.reload();
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photoUrl}
        alt={prompt}
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <button
            type="button"
            onClick={() => downloadImage(_id, photoUrl)}
            className="outline-none bg-transparent border-none flex justify-center"
          >
            <Image
              src="/images/download.png"
              alt="Download"
              width={20}
              height={20}
              className="w-6 h-6 object-contain invert"
            />
          </button>
          <button
            type="button"
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="outline-none bg-transparent border-none flex justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-4 fill-white"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z" />
            </svg>
          </button>

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg"></h3>
              <p className="py-4">
               Are you sure you want to delete this image?
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn" onClick={() => deleteImage(photoUrl)}>
                    Yes
                  </button>
                  <button className="btn ml-4">No keep it</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Card;
