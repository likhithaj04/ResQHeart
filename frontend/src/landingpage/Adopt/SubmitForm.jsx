import React from 'react'

export default function SubmitForm() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Main content wrapper */}
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="alert alert-success mt-5 w-75 text-center" role="alert">
          <strong>Congratulations!</strong> You have successfully submitted the adoption form.
          <br />
          We will get back to you shortly with the schedule for visiting the shelter home and meeting your chosen pet.
          <br />
          In the meantime, please keep your phone and email available. We may contact you for further verification.
          <br />
          Thank you for choosing to give a stray a second chance! 🐶🐾
        </div>
      </div>

      {/* Footer always at bottom */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        © 2025 ResQHeart | All rights reserved
      </footer>
    </div>
  );
}
