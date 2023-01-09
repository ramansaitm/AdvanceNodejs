#include <node.h>

namespace demo {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

// This is the implementation of the "sayHello" method
// Input arguments are passed using the
// FunctionCallbackInfo<Value> object, which is similar to
// the v8::FunctionCallbackInfo object used in C++ Addons.
void SayHello(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();

  // Set the return value (using the passed in
  // FunctionCallbackInfo<Value> object)
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "Hello, World!"));
}

void Initialize(Local<Object> exports) {
  NODE_SET_METHOD(exports, "sayHello", SayHello);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}  // namespace demo
