import React, { useState, useEffect, useCallback } from 'react';
import { Search } from 'lucide-react';
import { debounce } from '../utils/debounce';
import { Trie } from '../utils/searchTrie';

const UserSearch = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trie] = useState(() => new Trie());

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        
        // Build Trie with user names
        data.forEach((user) => {
          trie.insert(user.name);
        });
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [trie]);

  const searchUsers = useCallback((term) => {
    if (!term.trim()) {
      setFilteredUsers(users);
      return;
    }

    const matchedNames = trie.search(term);
    const filtered = users.filter(user => 
      matchedNames.includes(user.name)
    );
    setFilteredUsers(filtered);
  }, [users, trie]);

  const debouncedSearch = debounce(searchUsers, 300);

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <section className="py-20 bg-white" id="users">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Users</h2>
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* User Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(searchTerm ? filteredUsers : users).map((user) => (
            <div
              key={user.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
              <p className="text-gray-600 mb-1">{user.email}</p>
              <p className="text-gray-600 mb-1">{user.phone}</p>
              <p className="text-gray-600 mb-4">{user.website}</p>
              <div className="border-t pt-4">
                <p className="font-medium">{user.company.name}</p>
                <p className="text-sm text-gray-500 italic">{user.company.catchPhrase}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserSearch;