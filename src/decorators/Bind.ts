// Method decorator
export function bind(target: any, name: string, descriptor: PropertyDescriptor) {
    const orgMethod = descriptor.value;
    const newDescriptor: PropertyDescriptor = {
        get() {
            return orgMethod.bind(this);
        }
    };
    return newDescriptor;
} 