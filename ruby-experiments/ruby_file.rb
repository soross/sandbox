include Enumerable
File.open('wksst8110.for.txt') do |file|
  puts file.read(10)
  4.times do
    puts file.read(9)
    puts file.read(4)
  end
end
