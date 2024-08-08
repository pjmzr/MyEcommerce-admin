"use client";

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal title="test" description="test" isOpen onClose={() => {}} >
        hi
      </Modal>
    </div>
  );
}

export default SetupPage;