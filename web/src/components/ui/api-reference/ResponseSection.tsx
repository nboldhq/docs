import { Chip, Input } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import SchemaField from "./SchemaField";
import { useCallback, useState } from "react";


const useToggle = (initialState: boolean) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const toggle = useCallback(() => setIsOpen(v => !v), []);
    return [isOpen, toggle] as const;
  };



const ResponseSection = ({
    responses,
    path,
    handleChange,
  }: {
    responses: any;
    path: string[];
    handleChange: (path: string[], value: any) => void;
  }) => {
    const [isOpen, toggleOpen] = useToggle(false);

    return (
      <div className="border border-gray-400 rounded-lg mt-4">
        <div className="flex items-center justify-between p-3 cursor-pointer" onClick={toggleOpen}>
          <span className="font-semibold">Responses</span>
          <ChevronDown className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>

        {isOpen && (
          <div className="p-4 space-y-4"onClick={(e) => e.stopPropagation()}>
            {Object.entries(responses).map(([statusCode, response]: [string, any]) => (
              <div key={statusCode} className="">
                <div className="flex items-center gap-2 mb-4">
                  <Chip className={statusCode.startsWith('2') ? 'bg-success-500' : 'bg-warning-500'}>{statusCode}</Chip>
                  <Input
                    label="Description"
                    value={response.description}
                    onChange={(e) => handleChange([...path, statusCode, 'description'], e.target.value)}
                  />
                </div>
                {response.content && Object.entries(response.content).map(([contentType, content]: [string, any]) => (
                  <div key={contentType} className="mt-2 space-y-3" onClick={(e) => e.stopPropagation()}>
                    <Chip variant="flat" className="bg-success-200 text-gray-600">{contentType}</Chip>
                    {content.schema && (
                      <SchemaField 
                        schema={content.schema} 
                        path={[...path, statusCode, 'content', contentType, 'schema']}
                        onSchemaChange={handleChange}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  export default ResponseSection