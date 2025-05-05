import Modal from "@/components/Modal";

const OAuthModal = ({
  isOpen,
  onClose,
  onSignIn,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: (provider: string) => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-2 text-[#FFD9D6]">
          Select a Sign-In Method
        </h1>
        <div className="flex flex-col items-center mt-4 gap-4">
          <button className="action-button w-full">Sign in with Google</button>
          <button className="action-button w-full">Sign in with Github</button>
          <button className="action-button w-full">Sign in with Discord</button>
          <button className="action-button w-full">Sign in with Twitter</button>
          <button className="mt-2" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default OAuthModal;
