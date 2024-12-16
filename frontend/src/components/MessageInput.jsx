import { useRef, useState } from "react";
import { useSendMessage } from "../hooks/useSendMessage";
import imageCompression from "browser-image-compression";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() && !imagePreview) return;

    await sendMessage(message, imagePreview);
    setMessage("");
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    if (file) {
      const options = {
        maxSizeMB: 1, // Compress to 1MB
        maxWidthOrHeight: 800, // Resize to 800px
        useWebWorker: true,
      };

      try {
        const compressedFile = await imageCompression(file, options);

        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className='relative'>
      {imagePreview && (
        <div className='mb-3 flex items-center gap-2 '>
          <div className='absolute right-60 top-[-300px]'>
            <img
              src={imagePreview}
              alt='Preview'
              className='w-52 h-52  object-cover rounded-lg border border-zinc-700'
            />
            <button
              onClick={removeImage}
              className='absolute -top-1.5 -right-1.5 w-5 h-5 p-4  rounded-full bg-slate-900 text-white
              flex items-center justify-center'
              type='button'>
              X
            </button>
          </div>
        </div>
      )}
      <form
        className=' w-full p-2 relative flex items-center mt-auto '
        onSubmit={HandleSubmit}>
        <input
          type='text'
          className='py-3 px-4 border-none outline-none rounded-full w-full bg-gray-800 text-slate-400 mt-2'
          placeholder='Send messages...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <input
          type='file'
          accept='image/*'
          className='hidden'
          ref={fileInputRef}
          onChange={handleImageChange}
        />

        <button
          className='absolute  text-white right-24 top-6 hover:text-sky-400'
          type='submit'
          disabled={!message.trim() && !imagePreview}>
          {loading ? (
            <span className='loading loading-spinner loading-xs '></span>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30px'
              height='30px'
              viewBox='0 0 24 24'>
              <path fill='currentColor' d='M3 20v-6l8-2l-8-2V4l19 8z'></path>
            </svg>
          )}
        </button>
        <button
          className={`hidden sm:flex bg-slate-900 p-1 rounded-full mt-2 px-4 ml-2
            ${imagePreview ? "bg-emerald-500" : "bg-zinc-400"}`}
          type='button'
          onClick={() => fileInputRef?.current?.click()}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            className='h-8 w-8 '
            viewBox='0 0 24 24'
            fill='skyblue'>
            <path
              fill='currentColor'
              d='M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm1-4h12l-3.75-5l-3 4L9 13z'></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
