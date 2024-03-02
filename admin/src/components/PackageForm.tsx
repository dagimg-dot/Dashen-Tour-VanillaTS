import { createEffect, createSignal } from "solid-js";
import { DataSetFormMap, Package } from "../types/types";
import { createStore } from "solid-js/store";
import toast from "solid-toast";
import Input from "./Input";
import Slider from "./Slider";

interface PackageFormProps {
  packageInfo?: Package;
}

const PackageForm = ({ packageInfo }: PackageFormProps) => {
  const [isLoading, setLoading] = createSignal(false);
  const [error, SetError] = createSignal("");
  const [isDisabled, setDisabled] = createSignal(true);
  const [formData, setFormData] = createStore({
    name: packageInfo?.name || "",
    numberOfDays: packageInfo?.numberOfDays || 1,
    hotelStar: packageInfo?.hotelStar || 1,
    numberOfLocations: packageInfo?.numberOfLocations || 1,
    isFeatured: packageInfo?.isFeatured || "0",
  });

  createEffect(() => {
    if (error() !== "") {
      toast.error(error());
    }

    if (isFormDataChanged()) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  });

  const isFormDataChanged = () => {
    return (
      formData.name !== packageInfo?.name ||
      formData.numberOfDays !== packageInfo?.numberOfDays ||
      formData.numberOfLocations !== packageInfo?.numberOfLocations ||
      formData.hotelStar !== packageInfo?.hotelStar ||
      formData.isFeatured !== packageInfo?.isFeatured
    );
  };

  const handleChange = (event: { target: HTMLInputElement }) => {
    const { name, value } = event.target;

    if (name == "isFeatured") {
      setFormData((prev) => ({
        ...prev,
        isFeatured: value == "0" ? "1" : "0",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    console.log(formData);
  };

  const handleSliderButtonClick = (event: MouseEvent, item: number) => {
    const key =
      DataSetFormMap[
        (
          (event.target as HTMLButtonElement).dataset as {
            [index: string]: string;
          }
        ).type
      ];

    setFormData((prev) => ({
      ...prev,
      [key]: item,
    }));
  };

  const createPackage = async (formData: Package) => {
    SetError("");
    setLoading(true);
    try {
      const res = await fetch("/api/packages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
      toast.success("Package created successfully");
    } catch (error) {
      SetError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const updatePackage = async (formData: Package) => {
    SetError("");
    setLoading(true);
    try {
      const res = await fetch(`/api/packages/${formData.packageId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
      toast.success("Package updated successfully");
    } catch (error) {
      SetError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    if (packageInfo?.packageId) {
      // Update
      await updatePackage({
        packageId: packageInfo.packageId,
        ...formData,
      } as Package);

      packageInfo = {
        ...packageInfo,
        name: formData.name,
      };
      setDisabled(true);
    } else {
      // Create
      await createPackage(formData as Package);
    }
  };
  return (
    <div class="max-w-3xl mx-auto font-semibold">
      <div>
        <form class="flex flex-col" onsubmit={handleSubmit}>
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-2">
              <label>Package Name</label>
              <Input
                name="name"
                placeholder="name"
                required
                value={formData.name}
                oninput={handleChange}
                autofocus
              />
            </div>
            <div class="flex flex-col gap-2">
              <label>Number of Days</label>
              <Slider
                max={7}
                type="day"
                value={formData.numberOfDays}
                onclick={handleSliderButtonClick}
                oninput={handleChange}
              />
            </div>
            <div class="flex flex-col gap-2">
              <label>Number of Locations</label>
              <Slider
                max={10}
                value={formData.numberOfLocations}
                type="location"
                onclick={handleSliderButtonClick}
                oninput={handleChange}
              />
            </div>
            <div class="flex flex-col gap-2">
              <label>Hotel Star</label>
              <Slider
                max={5}
                value={formData.hotelStar}
                type="star"
                onclick={handleSliderButtonClick}
                oninput={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={isDisabled()}
            class="bg-main text-white rounded-lg px-4 py-2 hover:bg-main/90 mt-16 disabled:bg-main/70"
          >
            {isLoading() ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PackageForm;
