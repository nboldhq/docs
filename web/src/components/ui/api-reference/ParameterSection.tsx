import { Checkbox, Chip, Input, Textarea } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import { useCallback, useState } from "react";
import SchemaField from "./SchemaField";



const useToggle = (initialState: boolean) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const toggle = useCallback(() => setIsOpen(v => !v), []);
    return [isOpen, toggle] as const;
  };



const ParameterSection = ({
    parameters,
    path,
    handleChange,
  }: {
    parameters: any;
    path: string[];
    handleChange: (path: string[], value: any) => void;
  }) => {
    const [isOpen, toggleOpen] = useToggle(false);
    
    return (
      <div className="border border-gray-400 rounded-lg ">
        <div className="flex items-center justify-between p-3 cursor-pointer" onClick={toggleOpen}>
          <span className="font-semibold">Parameters</span>
          <ChevronDown className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        
        {isOpen && (
          <div className="p-4 space-y-4" onClick={(e) => e.stopPropagation()}>
            {parameters.map((param, index) => (
              <div key={index} className="space-y-2">
                <div className="flex gap-4 items-center" onClick={(e) => e.stopPropagation()}>
                  <Chip className='bg-primary-500 text-white' variant="flat">{param.in}</Chip>
                    <Input 
                    label="Name"
                    value={param.name}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleChange([...path, index.toString(), 'name'], e.target.value);
                    }}
                    />
                  <Checkbox
                    isSelected={param.required || false}
                    onValueChange={(value) => handleChange([...path, index.toString(), 'required'], value)}
                  >
                    Required
                  </Checkbox>
                </div>
                <Textarea
                  label="Description"
                  value={param.description || ''}
                  onChange={(e) => handleChange([...path, index.toString(), 'description'], e.target.value)}
                />
                <div className="">
                  <SchemaField 
                    schema={param.schema} 
                    path={[...path, index.toString(), 'schema']}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  export default ParameterSection
