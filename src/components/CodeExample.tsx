export default function CodeExample() {
  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <pre className="text-sm text-gray-300 font-mono">
        <code>{`// DuoScript Example
const a: number = 5
  if (a%2==0){
              console.log("The number is Even")
             }
          else{
            console.log("The number is Odd")
              }`}</code>
      </pre>
    </div>
  );
}