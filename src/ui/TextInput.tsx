type Props = {
    // children: React.ReactNode;
    children: React.ReactElement<{ id?: string }>;
    label?: string;
    error?: string;
};

const TextInput = ({ children, label, error }: Props) => {
    return (
        <div className="flex flex-col space-y-2.5">
            {label && (
                <label htmlFor={children?.props.id} className="text-lg">
                    {label}
                </label>
            )}
            {children}
            {error && <span>{error}</span>}
        </div>
    );
};

export default TextInput;
