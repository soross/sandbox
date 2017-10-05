
def nine(method=nil)
9
end
def plus(a=,b)
  a + b
end
def four(args=nil)
if !args.nil?
    method = args.scan(/^(.+?)\(/).chomp('(')
    attr = self.send(args.scan(/\w+\(\)/))
puts attr
    method(attr, 4)
  end
4
end

puts four(plus(nine()))
