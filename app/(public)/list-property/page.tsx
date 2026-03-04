"use client";

import { useState } from "react";
import IntakeLayout from "@/components/owner-intake/IntakeLayout";
import StepOwnership from "@/components/owner-intake/StepOwnership";
import StepContact from "@/components/owner-intake/StepContact";
import StepCategory from "@/components/owner-intake/StepCategory";
import StepReview from "@/components/owner-intake/StepReview";

export default function ListPropertyPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const [errors, setErrors] = useState<any>({});

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOwnership formData={formData} setFormData={setFormData} />;
      case 2:
        return <StepContact formData={formData} setFormData={setFormData} />;
      case 3:
        return <StepCategory formData={formData} setFormData={setFormData} />;
      case 4:
        return <StepReview formData={formData}/>;
      default:
        return null;
    }
  };

  const validateStep = () => {
  const newErrors: any = {};

  if (step === 1) {
    if (!formData.owner_type) {
      newErrors.owner_type = "Please select ownership type";
    }
  }

  if (step === 2) {
    if (!formData.full_name?.trim()) {
      newErrors.full_name = "Full name is required";
    }

    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = "Valid phone number required";
    }

    if (!formData.whatsapp || formData.whatsapp.length < 10) {
      newErrors.whatsapp = "Valid WhatsApp number required";
    }
  }

  if (step === 3) {
    if (!formData.property_category) {
      newErrors.property_category = "Please select a category";
    }
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

  return (
    <IntakeLayout step={step} setStep={setStep}>
      {renderStep()}
    </IntakeLayout>
  );
}
