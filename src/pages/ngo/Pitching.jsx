import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function Pitching() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h1 className="text-base font-semibold text-gray-900">Create Project</h1>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="project-name" className="block text-sm font-medium leading-6 text-gray-900">
                Project Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="project-name"
                  id="project-name"
                  autoComplete="project-name"
                  className="block flex-1 rounded-md shadow-sm border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Project Name"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="project-description" className="block text-sm font-medium leading-6 text-gray-900">
                Project Description
              </label>
              <div className="mt-2">
                <textarea
                  id="project-description"
                  name="project-description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  placeholder="Write a detailed description of the project."
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="project-manager" className="block text-sm font-medium leading-6 text-gray-900">
                Project Manager
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="project-manager"
                  id="project-manager"
                  autoComplete="project-manager"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Project Manager"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="manager@example.com"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="start-date" className="block text-sm font-medium leading-6 text-gray-900">
                Start Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="start-date"
                  id="start-date"
                  autoComplete="start-date"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="end-date" className="block text-sm font-medium leading-6 text-gray-900">
                End Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="end-date"
                  id="end-date"
                  autoComplete="end-date"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="total-budget" className="block text-sm font-medium leading-6 text-gray-900">
                Total Budget
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="total-budget"
                  id="total-budget"
                  autoComplete="total-budget"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Total Budget"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="funding-sources" className="block text-sm font-medium leading-6 text-gray-900">
                Funding Sources
              </label>
              <div className="mt-2">
                <textarea
                  id="funding-sources"
                  name="funding-sources"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  placeholder="List the sources of funding for this project."
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="goals" className="block text-sm font-medium leading-6 text-gray-900">
                Project Goals
              </label>
              <div className="mt-2">
                <textarea
                  id="goals"
                  name="goals"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  placeholder="List the broad, long-term aims of the project."
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="objectives" className="block text-sm font-medium leading-6 text-gray-900">
                Project Objectives
              </label>
              <div className="mt-2">
                <textarea
                  id="objectives"
                  name="objectives"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  placeholder="List the specific, measurable actions that will help achieve the goals."
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="target-group" className="block text-sm font-medium leading-6 text-gray-900">
                Target Beneficiaries
              </label>
              <div className="mt-2">
                <textarea
                  id="target-group"
                  name="target-group"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  placeholder="Describe the population or community that will benefit from the project."
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="evaluation-method" className="block text-sm font-medium leading-6 text-gray-900">
                Evaluation Method
              </label>
              <div className="mt-2">
                <textarea
                  id="evaluation-method"
                  name="evaluation-method"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  placeholder="Describe how the project’s success will be measured and evaluated."
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="partners" className="block text-sm font-medium leading-6 text-gray-900">
                Partner Organizations
              </label>
              <div className="mt-2">
                <textarea
                  id="partners"
                  name="partners"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  placeholder="List any other NGOs or organizations involved in the project."
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="permissions" className="block text-sm font-medium leading-6 text-gray-900">
                Permissions/Approvals
              </label>
              <div className="mt-2">
                <textarea
                  id="permissions"
                  name="permissions"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  placeholder="List any necessary permissions or approvals required to start the project."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
