import { useState } from "react";
import { IconType } from "react-icons";

interface InputProps {
  id: string;
  name: string;
  type?: string;
  value: string;
  placeholder: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InputPropsWithIcon extends InputProps {
  icon: IconType;
}

interface InputPropsWithToggle extends InputPropsWithIcon {
  secondaryIcon: IconType;
}

export const InputComponent: React.FC<InputProps> = ({
  id,
  name,
  type = "text",
  value,
  placeholder,
  handleInputChange,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 font-semibold">
        {name}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className="w-full h-12 px-4 mb-3 border border-neutral-300 rounded-lg focus:outline-none"
        onChange={handleInputChange}
      />
    </div>
  );
};

export const InputComponentWithIcon: React.FC<InputPropsWithIcon> = ({
  id,
  name,
  type = "text",
  value,
  icon,
  placeholder,
  handleInputChange,
}) => {
  const Icon = icon;
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 font-semibold">
        {name}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          className="w-full h-12 px-4 mb-3 border border-neutral-300 rounded-lg focus:outline-none"
          onChange={handleInputChange}
        />
        <Icon
          size="1.5rem"
          className="absolute top-0 translate-y-[50%] right-4 text-neutral-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export const InputPassword: React.FC<InputPropsWithToggle> = ({
  id,
  name,
  value,
  icon,
  secondaryIcon,
  placeholder,
  handleInputChange,
}) => {
  const [showPassword, setShowPassword] = useState(true);

  const Icon = icon;
  const SecondaryIcon = secondaryIcon;

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 font-semibold">
        {name}
      </label>
      <div className="relative">
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          placeholder={placeholder}
          className="w-full h-12 px-4 mb-3 border border-neutral-300 rounded-lg focus:outline-none"
          onChange={handleInputChange}
        />
        {showPassword ? (
          <Icon
            size="1.5rem"
            className="absolute top-0 translate-y-[50%] right-4 text-neutral-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <SecondaryIcon
            size="1.5rem"
            className="absolute top-0 translate-y-[50%] right-4 text-neutral-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
    </div>
  );
};
