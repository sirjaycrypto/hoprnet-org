import React, { useState, useEffect } from "react";

export default function AreaLanguages() {
  return (
    <div className="area-languages">
      <ul>
        <li className="active-languages">ENG</li>
        <li>CN</li>
        <li>RU</li>
        <li>DE</li>
      </ul>
    </div>
  );
}
