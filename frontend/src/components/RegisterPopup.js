import Popup from "./Popup";

function RegisterPopup({ onClose, isOpenOk, isOpenError, regText }) {
  const isOpen = isOpenOk || isOpenError;
  const regImgClass = isOpenError ? "popup__reg-img_error" : "";

  return (
    <Popup isOpen={isOpen} onClose={onClose} name="registerPopup">
      <div className="popup__container">
        <button
          className={"popup__close"}
          aria-label="Закрыть"
          type="button"
          onClick={onClose}
        />
        <div className={`popup__reg-img ${regImgClass}`} />
        <p className="popup__reg-text">{regText}</p>
      </div>
    </Popup>
  );
}

export default RegisterPopup;
