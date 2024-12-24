"use client"
import { useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Footer from "components/Footer/Footer"
import { IoIosArrowDropdown, IoIosArrowDropleft } from "react-icons/io"
import { FaCloudArrowUp } from "react-icons/fa6"
import { useDropzone } from "react-dropzone"
import { useRouter } from "next/navigation"
import Link from "next/link"


// Extend the File type to include a preview property
interface PreviewFile extends File {
  preview: string
}

export default function NewLogs() {
  // Simulating user account existence with a state
  const [hasTransactions, setHasTransactions] = useState<boolean>(true)

  // Use an array of PreviewFile for files state
  const [files, setFiles] = useState<PreviewFile[]>([])
  const [formData, setFormData] = useState({
    service_user_name: "",
    updated_by: "",
    placement: "",
    staff_on_duty: "",
    update: "",
  });
  const [loading, setLoading] = useState(false);
  

  const onDrop = (acceptedFiles: File[]) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
      "video/*": [],
      "application/pdf": [],
      "application/msword": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": [],
    },
  })

  const router = useRouter()

  const handleBackButtonClick = () => {
    router.back()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userId = localStorage.getItem("userId"); // Retrieve the user ID
      if (!userId) throw new Error("User ID not found in localStorage.");

      const payload = {
        ...formData,
        status: true,
        pub_date: new Date().toISOString(),
      };

      const response = await fetch("https://health-focused.fyber.site/daily-log/daily-logo/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the log. Please try again.");
      }

      alert("Daily log submitted successfully!");
      
      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message || "An error occurred while submitting the log.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="h-full bg-[#171818]">
        <div className="mx-auto flex min-h-screen ">
          <div className="flex w-full  flex-col ">
            <div>
              <DashboardNav />
            </div>
            <div className="mt-8 justify-center gap-3 max-md:px-3  md:flex md:flex-row">
              <button
                onClick={handleBackButtonClick}
                className="flex h-10 items-center gap-2 rounded-md border-[1px] border-[#0085FF] p-2 text-xs max-md:mb-3"
              >
                <IoIosArrowDropleft className="text-xl text-[#0085FF]" />
                <p className="bg-[#1e1e1e] text-[#0085FF]">GO BACK</p>
              </button>
              <div className="mb-6 flex flex-col items-center gap-4 rounded-md  bg-[#F5F5F5] p-6  md:w-1/3 lg:w-[45%] 2xl:w-1/3">
                <div className="flex w-full justify-between">
                  <p className="text-xl font-bold">New Daily Log</p>
                  <p className="text-xs">25 January 2024</p>
                </div>
                <form className=" flex w-full flex-col " onSubmit={handleSubmit}>
                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="service_user_name" className="label-title">
                      Name of Service User
                    </label>
                    <div className="input-field ">
                      <input
                        type="text"
                        id="service_user_name"
                        value={formData.service_user_name}
                        onChange={handleInputChange}
                        placeholder="Type and select your name"
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%" }}
                      />
                      <IoIosArrowDropdown size={18} />
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="updated_by" className="label-title">
                      Updated by
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="updated_by"
                        value={formData.updated_by}
                        onChange={handleInputChange}
                        placeholder="Type and select your name"
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%" }}
                      />
                      <IoIosArrowDropdown size={18} />
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="placement" className="label-title">
                      Placement
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="placement"
                        value={formData.placement}
                        onChange={handleInputChange}
                        placeholder="Select the Placement"
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%" }}
                      />
                      <IoIosArrowDropdown size={18} />
                    </div>
                  </div>

                  <div className="mb-3 flex w-full flex-col items-start">
                    <label htmlFor="staff_on_duty" className="label-title">
                      Staff on Duty
                    </label>
                    <div className="input-field w-40">
                      <input
                        type="text"
                        id="staff_on_duty"
                        value={formData.staff_on_duty}
                        onChange={handleInputChange}
                        placeholder="Separate names by comma"
                        className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%" }}
                      />
                      <IoIosArrowDropdown size={18} />
                    </div>
                  </div>
                  <div className="mb-6 flex w-full flex-col items-start">
                    <label htmlFor="update" className="label-title ">
                      Address
                    </label>
                    <div className="textarea-field ">
                      <textarea
                        id="update"
                        value={formData.update}
                        onChange={handleInputChange}
                        placeholder="e.g johndoe@gmail.com"
                        className="bg-transparent outline-none focus:outline-none lg:text-sm"
                        style={{ width: "100%", background: "transparent" }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="mb-6 flex w-full flex-col items-start ">
                    <label htmlFor="addMedia" className="label-title ">
                      Add Media
                    </label>
                    <div
                      {...getRootProps({
                        className:
                          "flex w-full bg-white flex-col items-center justify-center rounded-xl border-[1px] py-4 cursor-pointer",
                      })}
                    >
                      <input {...getInputProps()} />
                      <FaCloudArrowUp className="text-3xl" />
                      <p className="text-center text-sm">Drag and Drop files here or Browse</p>
                      <p className="px-3 text-center text-xs">
                        Supported files are JPG, PNG, MP4, PDF, DOC, XLXS, PPTX
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {files.map((file) => (
                        <div key={file.name} className="relative h-20 w-20">
                          <img src={file.preview} alt={file.name} className="h-full w-full rounded object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
                  >
                    {loading ? "Submitting..." : "POST"}
                  </button>
                </form>
              </div>
            </div>

            {/* <Footer /> */}
          </div>
        </div>
      </section>
    </>
  )
}