import Story from "../components/Story";

function Home() {
  return (
    <div className="flex flex-1 p-px-main">
      <div className="w-width-content">
        <div className="my-6 flex gap-4">
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
        </div>
        <div>Content</div>
      </div>
      <div className="pl-20">Sub</div>
    </div>
  );
}

export default Home;
