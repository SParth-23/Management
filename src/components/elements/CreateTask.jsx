import React from "react";

const CreateTask = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <main className="w-[85%] rounded-md px-10 py-9 bg-[#1c1c1c]">
        <form className="space-y-6 w-full">
          <h2 className="text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Create a New Task
          </h2>

          <div className="flex gap-8">
            {/* Left Column */}
            <div className="flex-1 space-y-5">
              <div>
                <label
                  htmlFor="task-title"
                  className="block text-base font-medium"
                >
                  Task Title
                </label>
                <input
                  type="text"
                  placeholder="Enter task name"
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-700 bg-opacity-50 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform duration-200 transform hover:scale-95"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-base font-medium">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-700 bg-opacity-50 border border-gray-600 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform duration-200 transform hover:scale-95"
                />
              </div>

              <div>
                <label
                  htmlFor="assign-to"
                  className="block text-base font-medium"
                >
                  Assign To
                </label>
                <input
                  type="text"
                  placeholder="Enter employee name"
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-700 bg-opacity-50 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform duration-200 transform hover:scale-95"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-base font-medium"
                >
                  Category
                </label>
                <input
                  type="text"
                  placeholder="Design, Development, etc."
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-700 bg-opacity-50 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform duration-200 transform hover:scale-95"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1">
              <label
                htmlFor="description"
                className="block text-base font-medium"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="13"
                placeholder="Describe the task"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-700 bg-opacity-50 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform duration-200 transform hover:scale-95"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium tracking-wide focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 transition-transform duration-300 transform hover:scale-95"
          >
            Create Task
          </button>
        </form>
      </main>
    </div>
  );
};

export default CreateTask;
