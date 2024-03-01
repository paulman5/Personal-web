import React from "react"
import { useForm } from "react-hook-form"

export default function Article() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onErrors = (errors) => console.error(errors)

  return (
    <div className="sm:px-8 mt-9" id="scroll-3">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
                My Articles
              </h1>
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <div className="flex flex-col gap-16">hey</div>
                <div className="space-y-10 lg:pl-16 xl:pl-24">
                  <form
                    onSubmit={handleSubmit(
                      (data) => console.log(data),
                      onError
                    )}
                  >
                    <input {...register("Email")} />
                    <input type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
