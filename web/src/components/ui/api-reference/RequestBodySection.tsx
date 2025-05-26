    import { Checkbox, Chip, Input } from "@heroui/react";
    import { ChevronDown } from "lucide-react";
    import { useCallback, useState } from "react";
    import SchemaField from "./SchemaField";



    const useToggle = (initialState: boolean) => {
        const [isOpen, setIsOpen] = useState(initialState);
        const toggle = useCallback(() => setIsOpen(v => !v), []);
        return [isOpen, toggle] as const;
    };


    const RequestBodySection = ({
        requestBody,
        path,
        handleChange,
    }: {
        requestBody: any;
        path: string[];
        handleChange: (path: string[], value: any) => void;
    }) => {
    
        const [isOpen, toggleOpen] = useToggle(false);
    
        return (
        <div className="border border-gray-400 rounded-lg mt-4">
            <div className="flex items-center justify-between p-3 cursor-pointer" onClick={toggleOpen}>
            <span className="font-semibold">Request Body</span>
            <ChevronDown className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>
    
            {isOpen && requestBody.content && (
            <div className="p-4 space-y-4" onClick={(e) => e.stopPropagation()}>
                <div className="space-y-2">
                <Input
                    label="Description"
                    value={requestBody.description || ''}
                    onChange={(e) => {
                    e.stopPropagation();
                    handleChange([...path, 'description'], e.target.value);
                    }}
                />
                <Checkbox
                    isSelected={requestBody.required || false}
                    onValueChange={(value) => handleChange([...path, 'required'], value)}
                >
                    Required
                </Checkbox>
                </div>
    
                {Object.entries(requestBody.content).map(([contentType, content]: [string, any]) => (
                <div key={contentType} className="space-y-3">
                    <Chip variant="flat" className="bg-success-200 text-gray-600">{contentType}</Chip>
                    {content.schema && (
                    <SchemaField
                        schema={content.schema}
                        path={[...path, 'content', contentType, 'schema']}
                        handleChange={handleChange}
                    />
                    )}
                </div>
                ))}
            </div>
            )}
        </div>
        );
    };
    
    export default RequestBodySection;
    
