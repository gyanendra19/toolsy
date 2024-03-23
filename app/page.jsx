import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="py-14 w-full">
        <div className="w-11/12 mx-auto">
            <div className="w-full flex-col flex justify-center items-center">
                <h1 className="text-gradient md:text-5xl text-4xl md:w-4/6 font-bold text-center">FIND & USE THE BEST TOOLS FOR TECH ENTHUSIASTS</h1>
                <p className=" text-blue-100 md:w-[79%] text-center mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur voluptates quod dolore ut saepe dicta dolores in numquam ratione unde!
                </p>
            </div>

            <Feed />
        </div>
    </section>
  )
}

export default Home