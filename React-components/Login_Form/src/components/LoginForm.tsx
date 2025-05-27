import { useState } from "react";

type LoginProps = {
  title: string;
  input: string[];
  btnvalue: string[];
};

export default function LoginForm({ title, input, btnvalue }: LoginProps) {
  const [formvalue, setformValue] = useState<string[]>(
    new Array(input.length).fill("")
  );
  const [warning, setWarning] = useState("");
  const [checkwarning, setcheckwarning] = useState("");
  const [checked, setChecked] = useState(false);

  const BtnClickEvent = () => {
    if (formvalue.some((v) => v.trim() === "")) {
      setWarning("빈칸에 값을 입력해 주세요.");
      return;
    } else {
      setWarning("");
    }
    if (!checked) {
      setcheckwarning("체크박스에 동의 해주세요.");
      return;
    } else {
      setcheckwarning("");
    }
    alert("제출됨");
  };
  return (
    <>
      <div className="bg-gray-100 h-fit rounded-[8px] m-10 p-[40px]">
        <div>
          <h2 className="font-bold text-gray-500 text text-xl">{title}</h2>
          <p className="text-[14px] font-thin">
            Please enter your details to continue.
          </p>

          <div>
            {input.map((placeholder, index) => (
              <div key={index}>
                <label htmlFor={`input_form${index}`}></label>
                <input
                  type="text"
                  id={`input_form${index}`}
                  placeholder={placeholder}
                  value={formvalue[index]}
                  onChange={(e) => {
                    const newValue = [...formvalue];
                    newValue[index] = e.target.value;
                    setformValue(newValue);
                  }}
                  className="w-[325px] h-[44px] py-[14px] px-[16px] border-solid border-[#4F4F4F] border-[1px] rounded-[8px] placeholder-[#ACACAC]"
                />
              </div>
            ))}
            <p className="text-red-500 text-[12px]">{warning}</p>
          </div>
          <div className="flex">
            <label htmlFor="check"></label>
            <input
              type="checkbox"
              id="check"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="accent-gray-600 w-[20px] h-[20px] "
            />
            <span className="ml-[10px] text-gray-500">
              I agree with <strong>terms </strong>and <strong>policies.</strong>
            </span>
          </div>
          <span className="text-red-500 text-[12px]">{checkwarning}</span>
          <div className="flex flex-col">
            <button
              onClick={BtnClickEvent}
              className="w-[325px] h-[44px] bg-[#4F4F4F] text-white rounded-[8px] mb-[20px] "
            >
              {btnvalue[0]}
            </button>
            <button className="w-[325px] h-[44px] border-solid border-[1px] border-[#4F4F4F] text-[#4F4F4F] rounded-[8px] ">
              {btnvalue[1]}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
