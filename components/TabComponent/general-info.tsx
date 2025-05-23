import Link from "next/link"
import { useEffect, useState } from "react"
import { FaCloudArrowUp } from "react-icons/fa6"
import { IoIosArrowDropdown } from "react-icons/io"
import { useDropzone } from "react-dropzone"

interface PreviewFile extends File {
  preview: string
}

interface Placement {
  id: string
  name: string
  location: string
  post_code: string
  bedrooms: string
  addition_info: string
  status: boolean
  pub_date: string
}

const GeneralInfo = ({ onSaveAndContinue }: { onSaveAndContinue: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    name_of_service_user: "",
    name_of_keyworker: "",
    placement: "",
    name_of_local_authority: "",
    placement_start_date: "",
    reason_for_referral: "",
  })

  const [files, setFiles] = useState<PreviewFile[]>([])
  const [placements, setPlacements] = useState<Placement[]>([])

  // Fetch placements from the API
  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const response = await fetch("https://hf-api.craftandurban.com/placement/placement/")
        if (response.ok) {
          const data = (await response.json()) as Placement[]
          setPlacements(data)
        } else {
          console.error("Failed to fetch placements")
        }
      } catch (error) {
        console.error("Error fetching placements:", error)
      }
    }

    fetchPlacements()
  }, [])

  const onDrop = (acceptedFiles: File[]) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSaveAndContinue(formData)
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

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-4 flex w-full flex-col rounded-md bg-[#f5f5f5] p-6">
        <div className="mb-3 flex w-full flex-col items-start">
          <label htmlFor="name_of_service_user" className="label-title">
            Name of Service User
          </label>
          <div className="input-field ">
            <input
              type="text"
              id="name_of_service_user"
              placeholder="Enter name"
              className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
              style={{ width: "100%" }}
              value={formData.name_of_service_user}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3 flex w-full flex-col items-start">
          <label htmlFor="name_of_keyworker" className="label-title">
            Name of Keyworker
          </label>
          <div className="input-field w-40">
            <input
              type="text"
              id="name_of_keyworker"
              placeholder="Type a name"
              className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
              style={{ width: "100%" }}
              value={formData.name_of_keyworker}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3 flex w-full flex-col items-start">
          <label htmlFor="placement" className="label-title">
            Placement
          </label>
          <div className="input-field w-40">
            <select
              id="placement"
              className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
              style={{ width: "100%" }}
              value={formData.placement}
              onChange={handleChange}
            >
              <option value="">Select the Placement</option>
              {placements.map((placement) => (
                <option key={placement.id} value={placement.name}>
                  {placement.name}
                </option>
              ))}
            </select>
            <IoIosArrowDropdown size={18} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="mb-3 flex w-full flex-col items-start">
            <label htmlFor="name_of_local_authority" className="label-title">
              Name of Local Authority
            </label>
            <div className="input-field w-40">
              <input
                type="text"
                id="name_of_local_authority"
                placeholder="Enter local authority"
                className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                style={{ width: "100%" }}
                value={formData.name_of_local_authority}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-3 flex w-full flex-col items-start">
            <label htmlFor="placement_start_date" className="label-title">
              Placement Start Date
            </label>
            <div className="input-field w-40">
              <input
                type="date"
                id="placement_start_date"
                className="w-40 bg-transparent outline-none focus:outline-none lg:text-sm"
                style={{ width: "100%" }}
                value={formData.placement_start_date}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="mb-3 flex w-full flex-col items-start">
          <label htmlFor="reason_for_referral" className="label-title ">
            Reason for Referral
          </label>
          <div className="textarea-field ">
            <textarea
              id="reason_for_referral"
              placeholder="Enter reason for referral"
              className="bg-transparent outline-none focus:outline-none lg:text-sm"
              style={{ width: "100%", background: "transparent" }}
              value={formData.reason_for_referral}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className=" flex w-full flex-col items-start">
          <label htmlFor="addMedia" className="label-title ">
            Add Media
          </label>
          <div
            {...getRootProps({
              className: "flex w-full flex-col items-center justify-center rounded-xl border-[1px] py-4 cursor-pointer",
            })}
          >
            <input {...getInputProps()} />
            <FaCloudArrowUp className="text-3xl" />
            <p className="text-sm">Drag and Drop files here or Browse</p>
            <p className="px-2 text-center text-xs">Supported files are JPG, PNG, MP4, PDF, DOC, XLXS, PPTX</p>
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
          className="mt-4 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#0052FF] p-3 text-sm text-white"
        >
          SAVE AND CONTINUE
        </button>
      </form>
    </div>
  )
}

export default GeneralInfo
