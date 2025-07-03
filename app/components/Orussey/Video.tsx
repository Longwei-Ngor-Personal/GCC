function VideoOrussey() {
  return (
    <div className="container mx-auto py-12">
      <div className="w-full h-[700px] mt-20 text-center pb-20">
        <h1 className="font-semibold text-3xl">Video</h1>
        <iframe
          src="https://www.youtube-nocookie.com/embed/SQol6JgOsNY"
          title="Company Introduction Video"
          className="mt-10 w-full h-full rounded-lg shadow-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoOrussey;
