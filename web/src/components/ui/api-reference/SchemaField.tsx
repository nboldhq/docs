import { Textarea } from "@heroui/react";
import { useEffect, useState } from "react";



const SchemaField = ({ schema, path,onSchemaChange }: { schema: Record<string, any>, path: string[],onSchemaChange: (path: string[], value: any) => void  }) => {
    
  const [textValue, setTextValue] = useState(JSON.stringify(schema, null, 2));
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>)  => {
    e.stopPropagation();
    const value = e.target.value;
    setTextValue(value);
    try {
      const parsed = JSON.parse(value);
      onSchemaChange(path, parsed);
    } catch (err) {
      console.error("Invalid JSON");
    }
  };

  useEffect(() => {
    setTextValue(JSON.stringify(schema, null, 2));
  }, [schema]);
  

  return (
    <div className="mt-4" onClick={(e) => e.stopPropagation()}>
     <Textarea
      label="Full Schema JSON"
      value={textValue}
      onChange={handleTextChange}
      minRows={10} 
      className="w-full h-64 resize-y"
      onClick={(e) => e.stopPropagation()}
    />

    </div>
  );
  };

  export default SchemaField